import { screen } from '@testing-library/react';
import { wrappedRender } from 'modules/shared/testing/wrappedRender';
import HeaderMessage from './HeaderMessage';

jest.mock('config/config', () => {
	return {
		config: {
			isHeaderMessageVisible: true,
			headerMessage: 'Test header message',
		},
	};
});
describe('HeaderMessage', () => {
	it('should render', () => {
		wrappedRender(<HeaderMessage />);

		expect(screen.getByText('Test header message'));
	});
});
