import React, { useEffect } from "react";

import { useAuth } from "use-auth0";
import { RocketMan } from "components/RocketMan";
import { styled } from "@mui/material";

const Root = styled('div')(({ theme }) => ({
  textAlign: "center",
  height: "100vh"
}))


const Auth0CallbackPage = () => {
  const { handleAuthentication } = useAuth();
  useEffect(() => {
    handleAuthentication();
  }, []);

  return (
    <Root>
      <RocketMan />
    </Root>
  );
};

export default Auth0CallbackPage;
