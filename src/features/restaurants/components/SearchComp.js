import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { LocationContext } from "../../../services/location/locationContext";

const SearchContainer = styled.View`
  justify-content: center;
  padding: ${({ theme }) => theme.space[3]};
`;

const SearchBar = styled(Searchbar)`
  border-radius: ${({ theme }) => theme.sizes[0]};
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

function SearchComp() {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  function onSearch() {
    if (!searchKeyword) return;
    console.log(searchKeyword);
    search(searchKeyword);
  }

  return (
    <SearchContainer>
      <SearchBar
        placeholder="Search for a location"
        onSubmitEditing={onSearch}
        onChangeText={setSearchKeyword}
        value={searchKeyword}
        elevation={1}
      />
    </SearchContainer>
  );
}

export default SearchComp;
