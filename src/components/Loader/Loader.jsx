import { ThreeDots } from 'react-loader-spinner';
import { StyledLoaderWrapper } from './StyledLoader';

export const Loader = () => {
  return (
    <StyledLoaderWrapper>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#282f45"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName
        visible={true}
      />
    </StyledLoaderWrapper>
  );
};
