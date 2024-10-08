import React from "react";

interface Data {
  title: string;
  link?: string;
  icon?: React.ReactNode;
}
interface Params {}

const iconSpacer = (
  <svg
    className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 6 10"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m1 9 4-4-4-4"
    />
  </svg>
);

const Breadcrumb = ({}: Params) => {
  const initialData: Data[] = [
    {
      title: "Home",
      link: "/",
      icon: (
        <svg
          className="w-3 h-3 me-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
        </svg>
      ),
    },
  ];

  const data: Data[] = [
    ...initialData,
    {
      title: "Comercial",
      link: "/commercial",
    },
    {
      title: "Orcamentos",
      link: "/commercial/orcamentos",
    },
  ];

  return (
    <nav
      className="flex bg-white border-b-2 p-3 -m-4 mb-4 z-0"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        {data.map((item) => (
          <li
            className="inline-flex items-center"
            aria-current="page"
            key={item.link}
          >
            <a
              href={item.link}
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              {item.icon || iconSpacer}
              {item.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
