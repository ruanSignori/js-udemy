import React from 'react';
import { useParams, useSearchParams, Outlet } from 'react-router-dom'

export function Posts() {
  const params = useParams();
  const { id } = params;
  const [qs] = useSearchParams()

  console.log(params)
  return (
    <div>
      <h1>Post {`Param: ${id}`} {`QS: ${qs.get('segundo')}`}</h1>
      <Outlet />
    </div>
  );
}