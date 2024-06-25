import { Link, useRouteError } from "react-router-dom";
function Error() {
  const error = useRouteError();
  console.log(error);
  if (error.status == 404) {
    return (
      <main class="grid min-h-[100vh] place-items-center px-8">
        <div class="text-center">
          <p class="text-9xl font-semibold text-primary">404</p>
          <h1 class="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            page not found
          </h1>
          <p class="mt-6 text-lg leading-7">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div class="mt-10">
            <a class="btn btn-secondary" href="/">
              go back home
            </a>
          </div>
        </div>
      </main>
    );
    return (
      <main class="grid min-h-[100vh] place-items-center px-8">
        <h4 className="text-center text-bold text-4x1">
          there was an error...
        </h4>
      </main>
    );
  }
}

export default Error;
