import { useNavigate } from "react-router";
import { Button } from "./components/ui/button";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <img src="/404-computer.svg" className="h-64 m-auto" alt="." />
          <h1 className="mb-4 text-lg tracking-tight font-extrabold lg:text-5xl text-primary ">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-primary md:text-4xl ">
            Something's missing.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.{" "}
          </p>
          <div>
            <Button
              onClick={() => {
                navigate("/");
              }}
              className="m-auto"
            >
              {" "}
              GO Back TO HOME
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
