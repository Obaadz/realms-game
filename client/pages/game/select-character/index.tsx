import type { NextPage } from "next";
import H2 from "../../../components/H2";
import CharacterLayout from "../../../layouts/game/CharacterLayout";

const Login: NextPage = () => {
  return (
    <CharacterLayout>
      <H2 className="pt-4">أختر شخصيتك</H2>
    </CharacterLayout>
  );
};

export default Login;
