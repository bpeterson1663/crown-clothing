import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CartIcon from '../cart-icon/cart-icon.container'
import CartDropdown from '../cart-dropdown/cart-dropdown.container'
import { selectCurrentUser } from '../../redux/user/user.selector'
import { signOutStart } from '../../redux/user/user.actions'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles'
const Header = ({ currentUser, signOutStart, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={signOutStart}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
