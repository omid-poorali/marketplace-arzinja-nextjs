import './page.scss';
import { Categories } from "./Categories";

const classes = {
  root: "HomePage",
};

export default function HomePage() {
  return <Categories className={classes.root} />
}