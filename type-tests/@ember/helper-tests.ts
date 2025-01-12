import {
  array,
  ArrayHelper,
  concat,
  ConcatHelper,
  fn,
  FnHelper,
  get,
  GetHelper,
  hash,
  HashHelper,
} from '@ember/helper';
import { expectTypeOf } from 'expect-type';

expectTypeOf(array).toEqualTypeOf<ArrayHelper>();
expectTypeOf(concat).toEqualTypeOf<ConcatHelper>();
expectTypeOf(fn).toEqualTypeOf<FnHelper>();
expectTypeOf(get).toEqualTypeOf<GetHelper>();
expectTypeOf(hash).toEqualTypeOf<HashHelper>();
