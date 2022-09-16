import { TestBed } from '@angular/core/testing';

import { PedidosResolverResolver } from './pedidos-resolver.resolver';

describe('PedidosResolverResolver', () => {
  let resolver: PedidosResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PedidosResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
