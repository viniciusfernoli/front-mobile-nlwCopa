import {Center, Text, Icon} from "native-base";
import Logo from '../assets/logo.svg';
import {Fontisto} from '@expo/vector-icons'
import { Button } from "../components/Button";
import { useAuth } from "../hooks/useAuth";

export function SignIn() {
  const {signIn, user} = useAuth();
  return (
    <Center flex={1} bgColor="gray.900" p={7}>
      <Logo width={212} height={40} />
      <Button 
        title="Entrar com o Google"
        type="SECONDARY"
        leftIcon={<Icon as={Fontisto} name='google' color="white" size="md" mr="3"/>}
        color="white"
        mt="12"
        fontSize="sm"
        onPress={signIn}
      />
      <Text 
        fontSize="sm" 
        textAlign="center" 
        color="gray.200" 
        fontFamily='heading'
        mt="4"
      >
        Não utilizamos nenhuma informação além {'\n'} do seu e-mail para criação de sua conta.</Text>
    </Center>
  );
}