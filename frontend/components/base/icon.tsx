// import dynamic from "next/dynamic";
// import { lazy } from "react";
// import Teste from "@phosphor-icons/react/dist/ssr/Eye";

// interface Params {
//   name: string;
//   size?: number;
//   color?: string;
// }

// const ICONS_PATH = "../../../../../node_modules/@phosphor-icons/react/dist/ssr";
// const ICON_EXTENSION = ".mjs";

// const Icon = ({ name, size, color }: Params) => {
//   const IconComponent = lazy(
//     () =>
//       import(`@phosphor-icons/react/dist/csr/${name}.mjs`).then((r: any) => {
//         console.log("r", r);
//         return { default: r[name] };
//       }) as any
//   );
//   // @ts-ignore
//   return <IconComponent size={size} color={color} />;
// };

// export default Icon;
