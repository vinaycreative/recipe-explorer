import { HorizontalScroll } from '@/components/ui/horizontal-scroll';
import { Chip } from '@/components/ui/chip';
import { FEATURED_AREAS } from '@/features/recipes/constants';

type CuisineChipsProps = {
  selectedArea: string | null;
  onSelectArea: (area: string) => void;
};

export function CuisineChips({ selectedArea, onSelectArea }: CuisineChipsProps) {
  return (
    <HorizontalScroll gap={8}>
      {FEATURED_AREAS.map((area) => (
        <Chip
          key={area}
          label={area}
          selected={selectedArea === area}
          onPress={() => onSelectArea(area)}
        />
      ))}
    </HorizontalScroll>
  );
}
