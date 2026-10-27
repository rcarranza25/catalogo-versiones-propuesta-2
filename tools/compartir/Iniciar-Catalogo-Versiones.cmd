@echo off
setlocal
set "ROOT=%~dp0"
start "Catálogo de Versiones" /min "%ROOT%runtime\node.exe" "%ROOT%server.js"
timeout /t 2 /nobreak >nul
start "" "http://127.0.0.1:4173/procesos/catalogo-versiones"
