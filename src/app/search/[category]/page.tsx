import { Products } from './Products/Products';
import './page.scss';

const classes = {
  root: "SearchPage",
};

export default function SearchPage({ params }: { params: { category: string } }) {
  return <Products className={classes.root} category={params.category}/>
}