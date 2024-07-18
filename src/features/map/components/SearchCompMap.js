import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { LocationContext } from "../../../services/location/locationContext";

const SearchContainer = styled.View`
  justify-content: center;
  padding: ${({ theme }) => theme.space[3]};
`;

const SearchBar = styled(Searchbar)`
  border-radius: ${({ theme }) => theme.sizes[3]};
  background-color: ${({ theme }) => theme.colors.bg.primary};
  border-width: 1px;
  border-color: grey;
  position: absolute;
  top: 30px;
  left: 8px;
  right: 8px;
  z-index: 100;
`;

function SearchCompMap() {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  function onSearch() {
    if (!searchKeyword) return;
    console.log(searchKeyword);
    search(searchKeyword);
  }

  return (
    <SearchBar
      placeholder="Search for a location"
      icon="map"
      onSubmitEditing={onSearch}
      onChangeText={setSearchKeyword}
      value={searchKeyword}
      elevation={1}
    />
  );
}

export default SearchCompMap;
