import { useCallback, useState } from "react";

import * as S from "./styles";

type HeaderProps = {
  hasHomeLink?: boolean;
};

export function Header({ hasHomeLink = false }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleOpenMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(true);
  }, []);

  const handleCloseMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

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
            <S.MenuLink to="/">Account</S.MenuLink>
          </S.MenuItem>

          <S.MenuItem>
            <S.MenuLogoutButton>
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
