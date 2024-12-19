import FlipCard from "@/components/organisms/flip-card";
import { FlipCardInterface } from "@/types/flipCard";
interface Props {
  listFlipcard: FlipCardInterface[];
}
function ListFlipcard({ listFlipcard }: Props) {
  return (
    <>
      {listFlipcard?.map((flipcard, index) => {
        return (
          <FlipCard
            key={index}
            definition={flipcard.definition}
            example={flipcard.example}
            pronunciation={flipcard.pronunciation}
            vocabulary={flipcard.vocabulary}
          />
        );
      })}
    </>
  );
}

export default ListFlipcard;
