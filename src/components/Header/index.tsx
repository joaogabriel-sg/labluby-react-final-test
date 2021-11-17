import { useCallback, useState } from "react";

import { logout } from "@store/auth";

import { useAppDispatch } from "@shared/hooks";

import * as S from "./styles";

type HeaderProps = {
  hasHomeLink?: boolean;
};

export function Header({ hasHomeLink = false }: HeaderProps) {
  const dispatch = useAppDispatch();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleOpenMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(true);
  }, []);

  const handleCloseMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const handleLogoutUser = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <S.Container>
      <S.Content>
        <S.Logo>TGL</S.Logo>

        <S.Menu isMobileMenuOpen={isMobileMenuOpen}>
          {hasHomeLink && (
            <S.MenuItem homeLink>
              <S.MenuLink to="/">Home</S.MenuLink>
            </S.MenuItem>
          )}

          <S.MenuItem>
            <S.MenuLink to="/account">Account</S.MenuLink>
          </S.MenuItem>

          <S.MenuItem>
            <S.MenuLogoutButton onClick={handleLogoutUser}>
              Log out
              <S.ArrowRightIcon />
            </S.MenuLogoutButton>
          </S.MenuItem>

          <S.CloseMenuButton onClick={handleCloseMobileMenu}>
            <S.CloseMenuIcon />
          </S.CloseMenuButton>
        </S.Menu>

        <S.BurgerMenuButton onClick={handleOpenMobileMenu}>
          <S.BurgerMenuIcon />
        </S.BurgerMenuButton>
      </S.Content>
    </S.Container>
  );
}
