export const injectionTokens = {
  apiConfigFactory: Symbol.for('apiConfigFactory'),

  authResource: Symbol.for('authResource'),
  clientsResource: Symbol.for('clientsResource'),
  journeyResource: Symbol.for('journeyResource'),
  journeysResource: Symbol.for('journeysResource'),
  parcelsResource: Symbol.for('parcelsResource'),

  rootStore: Symbol.for('rootStore'),
  authStore: Symbol.for('authStore'),
  userStore: Symbol.for('userStore'),
  lazyRootStore: Symbol.for('lazyRootStore'),

  clientsStore: Symbol.for('clientsStore'),
  journeyStore: Symbol.for('journeyStore'),
  journeysStore: Symbol.for('journeysStore'),
  parcelsStore: Symbol.for('parcelsStore'),

  navigationService: Symbol.for('navigationService'),
};
