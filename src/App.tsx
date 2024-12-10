import Filters from "./components/Filters";
import Ticket from "./components/Ticket";

export default function App() {
  return (
    <div>
      <h1>IDEA Platform | Тестовое задание</h1>

      <div>
        <Filters />
        <div>
          <Ticket />
          <Ticket />
        </div>
      </div>
    </div>
  );
}
