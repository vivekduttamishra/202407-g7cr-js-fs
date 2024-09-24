import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import LoginScreen from './user-login-screen';
import '@testing-library/jest-dom';

const mockStore = configureStore([]);

xdescribe('LoginScreen', () => {
  let store:any;

  beforeEach(() => {
    store = mockStore({
      auth: { isAuthenticated: false, error: null },
    });
  });

  test('should display login form', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginScreen />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByPlaceholderText(/Username/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  test('should display error message on login failure', () => {
    store = mockStore({
      auth: { isAuthenticated: false, error: 'Invalid credentials' },
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginScreen />
        </BrowserRouter>
      </Provider>
    );

    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(screen.getByText(/Invalid credentials/i)).toBeInTheDocument();
  });

  test('should redirect to home on successful login if no redirect path', () => {
    store = mockStore({
      auth: { isAuthenticated: true, error: null },
    });

    const mockNavigate = jest.fn();
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useNavigate: () => mockNavigate,
    }));

    render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginScreen />
        </BrowserRouter>
      </Provider>
    );

    expect(mockNavigate).toHaveBeenCalledWith('/home');
  });

  test('should redirect to the desired path on successful login with returnpath', () => {
    store = mockStore({
      auth: { isAuthenticated: true, error: null },
    });

    const mockNavigate = jest.fn();
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useNavigate: () => mockNavigate,
      useSearchParams: () => [{ get: () => '/dashboard' }],
    }));

    render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginScreen />
        </BrowserRouter>
      </Provider>
    );

    expect(mockNavigate).toHaveBeenCalledWith('/dashboard');
  });
});
