import styled from "styled-components";

export const DataTableContainer = styled.div`
  .dataGrid{
    background: white;
    padding: 20px;

    .MuiDataGrid-toolbarContainer{
      flex-direction: row-reverse;
    }

    img{
      border-radius: 50%;
      object-fit: cover;
    }

    .action{
      display: flex;
      gap: 15px;

      img{
        width: 20px;
        height: 20px;
        cursor: pointer;
      }
    }
  }
`