import React from "react";
import {
  Link

} from 'react-router-dom';
import './Pagination.css';
interface Prop {
  postsPerPage: number;
  totalPosts: number;
  paginate: Function;
}
const Pagination: React.FC<Prop> = ({ postsPerPage, totalPosts, paginate }) => {
  let pageNumbers: number[] = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination">
      <ul >
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <Link onClick={() => paginate(number)} to="/firstpage" className="page-link">
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Pagination;
