import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const [urlImg, setUrlImg] = useState('')

  function handleViewImg(url: string): void {
    onOpen()
    setUrlImg(url)
  }

  return (
    <>
      <SimpleGrid columns={[1, 2, 3]} spacing='40px'>
        {
          cards.map((data) => (
            <Card key={data.id} data={data} viewImage={handleViewImg} />
          ))
        }
      </SimpleGrid>


      <ModalViewImage
        isOpen={isOpen}
        onClose={onClose}
        imgUrl={urlImg}
      />
    </>
  );
}
