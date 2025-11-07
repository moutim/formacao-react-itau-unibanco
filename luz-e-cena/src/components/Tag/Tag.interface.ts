type Categoria = '2D' | '3D';

type Censura = 'Livre' | '10 anos' | '12 anos' | '14 anos' | '16 anos';

export default interface ITag {
  value: Categoria | Censura;
}