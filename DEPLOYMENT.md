# Guía de Despliegue a GitHub Pages

## Pasos para publicar tu aplicación en GitHub Pages

### 1. Crear un repositorio en GitHub
1. Ve a [GitHub](https://github.com) y crea un nuevo repositorio
2. Nómbralo `web-u` (o el nombre que prefieras)
3. **NO** inicialices con README, .gitignore o licencia

### 2. Inicializar Git en tu proyecto local
Abre una terminal en `f:/PROGRAMACION/web-u` y ejecuta:

```bash
git init
git add .
git commit -m "Initial commit: Reading Quest App"
```

### 3. Conectar con GitHub
Reemplaza `TU-USUARIO` con tu nombre de usuario de GitHub:

```bash
git remote add origin https://github.com/Dcrosssensei/web-u.git
git branch -M main
git push -u origin main
```

### 4. Configurar GitHub Pages
1. Ve a tu repositorio en GitHub
2. Click en **Settings** (Configuración)
3. En el menú lateral, click en **Pages**
4. En **Source**, selecciona **GitHub Actions**

### 5. Despliegue Automático
Una vez que hagas push a la rama `main`, GitHub Actions automáticamente:
- Instalará las dependencias
- Construirá el proyecto
- Desplegará a GitHub Pages

Tu sitio estará disponible en:
```
https://Dcrosssensei.github.io/web-u/
```

### 6. Actualizar el proyecto
Para futuras actualizaciones, simplemente:

```bash
git add .
git commit -m "Descripción de los cambios"
git push
```

## Notas Importantes

### Si tu repositorio tiene un nombre diferente
Si nombraste tu repositorio de forma diferente (por ejemplo, `reading-quest`), debes actualizar el archivo `vite.config.js`:

```javascript
base: '/nombre-de-tu-repo/',
```

### Verificar el despliegue
1. Ve a la pestaña **Actions** en tu repositorio de GitHub
2. Verás el workflow "Deploy to GitHub Pages" ejecutándose
3. Cuando termine (marca verde ✓), tu sitio estará listo

### Solución de problemas

**Si el sitio no carga correctamente:**
- Verifica que el `base` en `vite.config.js` coincida con el nombre de tu repositorio
- Asegúrate de que GitHub Pages esté configurado para usar GitHub Actions

**Si las rutas no funcionan:**
- GitHub Pages sirve archivos estáticos, así que las rutas de React Router pueden necesitar configuración adicional
- Considera usar HashRouter en lugar de BrowserRouter si tienes problemas

## Comandos útiles

```bash
# Ver el estado de git
git status

# Ver el historial de commits
git log --oneline

# Crear una nueva rama
git checkout -b nombre-rama

# Cambiar de rama
git checkout main
```
