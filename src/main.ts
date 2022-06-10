import { routes } from "./pages/pages.routing";
import { useRouter } from "./shared";
import "uno.css";
export const router = useRouter({
  isHash: false,
  outlet: document.querySelector("#outlet"),
});

router.setRoutes(routes);
