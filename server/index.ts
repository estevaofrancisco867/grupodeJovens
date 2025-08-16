import express, { Request, Response, NextFunction } from "express";
import http from "http";
import path from "path";
import { registerRoutes } from "./routes";
import { log } from "./vite"; // Se você tiver uma função de log própria

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger simplificado (opcional)
app.use((req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`);
  });
  next();
});

// Rotas da API
await registerRoutes(app);

// Tratamento de erros (opcional)
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || 500;
  res.status(status).json({ message: err.message || "Erro interno" });
});

// Produção: servir frontend (Vite build)
if (process.env.NODE_ENV === "production") {
  const distPath = path.resolve("dist");

  // Servir arquivos estáticos (index.html, assets, etc.)
  app.use(express.static(distPath));

  // Redirecionar tudo que não for API para o index.html
  app.get("*", (_req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
} else {
  // Ambiente de desenvolvimento com Vite (apenas local)
  const { createServer } = await import("vite");
  const vite = await createServer({
    server: { middlewareMode: true },
    root: path.resolve("client"),
  });

  app.use(vite.middlewares);
}

// Criar servidor HTTP (necessário para Vite em dev)
const server = http.createServer(app);

// Ouvir em todas as interfaces (necessário no Render)
const PORT = process.env.PORT || 5000;

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor ouvindo em http://localhost:${PORT}`);
});
