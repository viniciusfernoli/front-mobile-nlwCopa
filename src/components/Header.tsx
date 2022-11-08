import { Text, HStack, Box, Container, VStack } from 'native-base';
import { CaretLeft, Export } from 'phosphor-react-native';
import Logo from '../assets/logo.svg';

import { ButtonIcon } from './ButtonIcon';

interface Props {
  title: string;
  showBackButton?: boolean;
  showShareButton?: boolean;
}

export function Header({ title, showBackButton = false, showShareButton = false }: Props) {
  const EmptyBoxSpace = () => (<Box w={6} h={6} />);

  return (
    <HStack w="full" h={32} bgColor="gray.800" alignItems="flex-end" pb={5}>
      <VStack w="full"  alignItems="center" pl="4" pr="4">

        <HStack mb={3}>
          <Logo  width={60}/>
        </HStack>

        <HStack w="full" justifyContent="space-between">
          {
            showBackButton
              ? <ButtonIcon icon={CaretLeft} />
              : <EmptyBoxSpace />

          }

          <Text color="white" fontFamily="medium" fontSize="md" textAlign="center">
            {title}
          </Text>

          {
            showShareButton
              ?
              <ButtonIcon icon={Export}/>
              :
              <EmptyBoxSpace />
          }
        </HStack>

      </VStack>
    </HStack>
  );
}