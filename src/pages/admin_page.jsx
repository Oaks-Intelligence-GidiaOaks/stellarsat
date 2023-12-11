import { Studio, defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import stellarsatLogo from "../assets/logo.svg";
import { schemaTypes } from "../../sanity/schemas";

const StudioLogo = (props) => {
  return (
    <div className="flex items-center gap-2 ">
      <img
        alt="logo"
        src={stellarsatLogo}
        width={30}
        height={30}
        className="object-cover rounded-full translate-x-3"
      />
      <>{props.renderDefault(props)}</>
    </div>
  );
};

const AdminPage = () => {
  return (
    <div
      style={{
        height: "100vh",
        maxHeight: "100dvh",
        overscrollBehavior: "none",
        WebkitFontSmoothing: "antialiased",
        overflow: "auto",
      }}
    >
      <Studio
        config={defineConfig({
          plugins: [deskTool()],
          studio: {
            components: {
              logo: StudioLogo,
            },
          },
          basePath: "/admin",
          name: "StellarSat_Content_Studio",
          title: "StellarSat Content Studio",
          projectId: "xymdbyrp",
          dataset: "production",
          schema: {
            types: schemaTypes,
          },
        })}
      />
    </div>
  );
};

export default AdminPage;

// const AdminPage = () => {
//   return (
//     <div>
//       <iframe
//         src="https://stellar-sanity.sanity.studio/admin"
//         frameborder="0"
//         style={{ width: "100%", height: "800px", border: "none" }}
//       ></iframe>

//       <button>
//         <a href="https://stellar-sanity.sanity.studio/admin" target="_blank">
//           Open Admin
//         </a>
//       </button>
//     </div>
//   );
// };

// export default AdminPage;
