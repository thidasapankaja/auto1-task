import {Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {PaginationModel} from "../../continers/Cars/models";
import {StyledPaginationOption} from "./styles";

type PaginationProps = {
  onClick: (arg0: number) => void;
  paginationMeta: PaginationModel;
};

const Pagination = ({onClick, paginationMeta}: PaginationProps) => {
  return (
    <Box sx={{typography: "body1", display: "flex", justifyContent: "center"}}>
      <StyledPaginationOption onClick={() => onClick(1)}>
        First
      </StyledPaginationOption>
      <StyledPaginationOption
        onClick={() => onClick(paginationMeta?.currentPage - 1)}
      >
        Previous
      </StyledPaginationOption>
      <Typography
        sx={{
          margin: "24px",
          fontSize: "14px",
        }}
      >
        Page {paginationMeta.currentPage} of {paginationMeta?.totalPageCount}
      </Typography>
      <StyledPaginationOption
        onClick={() => onClick(paginationMeta?.currentPage + 1)}
      >
        Next
      </StyledPaginationOption>
      <StyledPaginationOption
        onClick={() => onClick(paginationMeta?.totalPageCount)}
      >
        Last
      </StyledPaginationOption>
    </Box>
  );
};

export default Pagination;
