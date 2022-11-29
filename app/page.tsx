import { ClientComponent } from "./ClientComponent";
import { ServerComponent } from "./ServerComponent";

export default function Home() {
  return (
    <>
      <ul>
        <li>
          ClientComponent: <ClientComponent />
        </li>
        <li>
          ServerComponent: <ServerComponent />
        </li>
      </ul>
    </>
  );
}
