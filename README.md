# Softtek Angular Basics Edición 3

Curso de introducción a Angular moderno para Softtek. **Edición 3. Noviembre 24**

> [Laboratorio de ejemplo](https://github.com/TrainingITCourses/softtek_angular_basics_3) del curso de [Angular Basics para Softtek nov 24](https://cursos.trainingit.es/course/view.php?id=1761) impartido por [Alberto Basalo](https://albertobasalo.dev) con TrainingIT.

> [!NOTE]
> This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version _18.2.12._

## Requisitos para el laboratorio

Comprobar [versión de Node.js u npm](https://angular.dev/reference/versions#)

```bash
# Check Node.js and npm versions
node -v
npm -v
```

> [!NOTE]
> La aplicación de ejemplo estará en la carpeta [AstroBookings](./AstroBookings)

## Replicar desde cero

Instalar **Angular CLI** y generar aplicación de ejemplo.

```bash
# Install Angular CLI
npm i -g @angular/cli@latest
# Generate new Angular project
ng new AstroBookings --inline-style --inline-template --prefix=lab --ssr=false --style=css
# Alternative with shortcut aliases (- instead of --)
ng new AstroBookings -s -t -p=lab --ssr=false --style=css
# Alternative without global Angular CLI
npx ng new AstroBookings -s -t -p=lab --ssr=false --style=css
```

## Iniciar a partir del laboratorio

El código fuente de la aplicación de ejemplo se encuentra en el repositorio de GitHub [softtek_angular_basics_3](https://github.com/TrainingITCourses/softtek_angular_basics_3).

```bash
# Clone lab from github
git clone https://github.com/TrainingITCourses/softtek_angular_basics_3.git
# Install dependencies
cd softtek_angular_basics_3/AstroBookings
npm install
```

## Iniciar servidor de desarrollo

Ejecutar servidor de desarrollo de Angular.

```bash
# Start development server
ng serve
# Alternative with npm
npm start
```

### API REST de ejemplo

- Instrucciones para servidor de ejemplo en [APIbun](https://github.com/AlbertoBasalo/api_bun)

---

<footer>
  <h3>🧑🏼‍💻 By <a href="https://albertobasalo.dev" target="blank">Alberto Basalo</a> </h3>
  <p>
    <a href="https://twitter.com/albertobasalo" target="blank">
      <img src="https://img.shields.io/twitter/follow/albertobasalo?logo=twitter&style=for-the-badge" alt="twitter albertobasalo" />
    </a>
  </p>
  <p>
    <a href="https://github.com/albertobasalo" target="blank">
      <img 
        src="https://img.shields.io/github/followers/albertobasalo?logo=github&label=profile albertobasalo&style=for-the-badge" alt="git albertobasalo" />
    </a>
  </p>
</footer>
