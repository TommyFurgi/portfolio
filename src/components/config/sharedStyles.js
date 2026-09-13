import { COLOR_PRIMARY, FONT_BODY, SIZE_TITLE } from './Constants';

export const sectionHeaderStyle = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
};

export const sectionTitleStyle = {
  fontSize: SIZE_TITLE,
  fontWeight: 700,
  fontFamily: FONT_BODY,
  borderBottom: `2px solid ${COLOR_PRIMARY}`,
  display: 'inline',
  marginBottom: '16px',
  color: COLOR_PRIMARY,
};
