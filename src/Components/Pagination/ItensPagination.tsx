import { Container, Row, Pagination } from "react-bootstrap";
import React, { Children, useState } from "react";
import * as S from './styles'
interface PaginateProps {
  children: React.ReactElement[];
  limit: number;
  active?: number;
}

function Paginate({ children, limit, active = 1 }: PaginateProps) {
  let pageItems = [];
  let totalPages = Math.ceil(children.length / limit);
  const [page, setPage] = useState(active);
  for (let number = 1; number <= totalPages; number++) {
    pageItems.push(
      <Pagination.Item
        key={number}
        onClick={() => setPage(number)}
        active={number === page}
      >
        {number}
      </Pagination.Item>
    );
  }
  const filterList = children.filter(
    (_, index) => index >= (page - 1) * limit && index < page * limit
  );
  return (
    <>
      {filterList}
      <S.ContainerPaginate>
        <Pagination  >{pageItems}</Pagination>
        <br />
      </S.ContainerPaginate>
    </>
  );
}

export default Paginate;
