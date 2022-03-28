import { MDXRemote } from "next-mdx-remote";
import { Link } from "../components/Link";
import { MarkdownResult } from "../utils";

export const Markdown = ({ children }: { children: MarkdownResult }) => {
  return (
    <MDXRemote
      {...children}
      components={{
        a: ({ href, children, ...props }) => {
          return (
            <Link href={href} {...props}>
              {children}
            </Link>
          );
        },
      }}
    />
  );
};
// export const Markdown = ({ children }: { children: string }) => {
//   return (
//     <ReactMarkdown
//       components={{
//         a: ({ href, ...props }) => {
//           if (!href) {
//             return <a {...props}></a>;
//           }
//           return (
//             <Link href={href}>
//               <a {...props}></a>
//             </Link>
//           );
//         },
//       }}
//     >
//       {children}
//     </ReactMarkdown>
//   );
// };
