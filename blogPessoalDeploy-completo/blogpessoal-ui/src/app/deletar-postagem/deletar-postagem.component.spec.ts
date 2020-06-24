import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarPostagemComponent } from './deletar-postagem.component';

describe('DeletarPostagemComponent', () => {
  let component: DeletarPostagemComponent;
  let fixture: ComponentFixture<DeletarPostagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletarPostagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletarPostagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
