[tiny-fp](README.md) / Exports

# tiny-fp

## Table of contents

### Functions

- [append](modules.md#append)
- [curry](modules.md#curry)
- [debounce](modules.md#debounce)
- [divide](modules.md#divide)
- [groupBy](modules.md#groupby)
- [head](modules.md#head)
- [includes](modules.md#includes)
- [isArray](modules.md#isarray)
- [isEmpty](modules.md#isempty)
- [isEqual](modules.md#isequal)
- [isFloat](modules.md#isfloat)
- [isInteger](modules.md#isinteger)
- [isNotEmpty](modules.md#isnotempty)
- [isObject](modules.md#isobject)
- [isRecord](modules.md#isrecord)
- [isString](modules.md#isstring)
- [last](modules.md#last)
- [maybe](modules.md#maybe)
- [modulo](modules.md#modulo)
- [multiply](modules.md#multiply)
- [noop](modules.md#noop)
- [not](modules.md#not)
- [or](modules.md#or)
- [pick](modules.md#pick)
- [pipe](modules.md#pipe)
- [prepend](modules.md#prepend)
- [prop](modules.md#prop)
- [random](modules.md#random)
- [reorderArray](modules.md#reorderarray)
- [skip](modules.md#skip)
- [sleep](modules.md#sleep)
- [sum](modules.md#sum)
- [trace](modules.md#trace)
- [unique](modules.md#unique)
- [updateArray](modules.md#updatearray)

## Functions

### append

▸ `Const`**append**(...`props`: *any*): *any*

#### Parameters:

Name | Type |
:------ | :------ |
`...props` | *any* |

**Returns:** *any*

Defined in: [append.ts:4](https://github.com/Tbutnyakov/tiny-fp/blob/4b4c4db/src/append.ts#L4)

___

### curry

▸ **curry**(`fn`: *any*): *function*

#### Parameters:

Name | Type |
:------ | :------ |
`fn` | *any* |

**Returns:** (...`props`: *any*) => *any*

Defined in: [curry.ts:1](https://github.com/Tbutnyakov/tiny-fp/blob/4b4c4db/src/curry.ts#L1)

___

### debounce

▸ `Const`**debounce**<T\>(`fn`: T, `ms`: *number*, `immediate`: *boolean*): *function*

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | WrapperFn |

#### Parameters:

Name | Type |
:------ | :------ |
`fn` | T |
`ms` | *number* |
`immediate` | *boolean* |

**Returns:** (...`args`: *Parameters*<T\>) => *void*

Defined in: [debounce.ts:3](https://github.com/Tbutnyakov/tiny-fp/blob/4b4c4db/src/debounce.ts#L3)

___

### divide

▸ `Const`**divide**(...`props`: *any*): *any*

#### Parameters:

Name | Type |
:------ | :------ |
`...props` | *any* |

**Returns:** *any*

Defined in: [divide.ts:3](https://github.com/Tbutnyakov/tiny-fp/blob/4b4c4db/src/divide.ts#L3)

___

### groupBy

▸ `Const`**groupBy**<T\>(`list`: T[], `key`: keyof T): *Record*<string, T[]\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`list` | T[] |
`key` | keyof T |

**Returns:** *Record*<string, T[]\>

Defined in: [groupBy.ts:1](https://github.com/Tbutnyakov/tiny-fp/blob/4b4c4db/src/groupBy.ts#L1)

___

### head

▸ `Const`**head**<T\>(`x`: T[]): T

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`x` | T[] |

**Returns:** T

Defined in: [head.ts:8](https://github.com/Tbutnyakov/tiny-fp/blob/4b4c4db/src/head.ts#L8)

▸ `Const`**head**(`x`: String): String

#### Parameters:

Name | Type |
:------ | :------ |
`x` | String |

**Returns:** String

Defined in: [head.ts:8](https://github.com/Tbutnyakov/tiny-fp/blob/4b4c4db/src/head.ts#L8)

___

### includes

▸ `Const`**includes**(...`props`: *any*): *any*

#### Parameters:

Name | Type |
:------ | :------ |
`...props` | *any* |

**Returns:** *any*

Defined in: [includes.ts:3](https://github.com/Tbutnyakov/tiny-fp/blob/4b4c4db/src/includes.ts#L3)

___

### isArray

▸ `Const`**isArray**(`item`: *any*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`item` | *any* |

**Returns:** *boolean*

Defined in: [isArray.ts:1](https://github.com/Tbutnyakov/tiny-fp/blob/4b4c4db/src/isArray.ts#L1)

___

### isEmpty

▸ `Const`**isEmpty**(`target`: *any*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *any* |

**Returns:** *boolean*

Defined in: [isEmpty.ts:5](https://github.com/Tbutnyakov/tiny-fp/blob/4b4c4db/src/isEmpty.ts#L5)

___

### isEqual

▸ `Const`**isEqual**(...`props`: *any*): *any*

#### Parameters:

Name | Type |
:------ | :------ |
`...props` | *any* |

**Returns:** *any*

Defined in: [isEqual.ts:4](https://github.com/Tbutnyakov/tiny-fp/blob/4b4c4db/src/isEqual.ts#L4)

___

### isFloat

▸ `Const`**isFloat**(`n`: *any*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`n` | *any* |

**Returns:** *boolean*

Defined in: [isFloat.ts:1](https://github.com/Tbutnyakov/tiny-fp/blob/4b4c4db/src/isFloat.ts#L1)

___

### isInteger

▸ `Const`**isInteger**(`n`: *any*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`n` | *any* |

**Returns:** *boolean*

Defined in: [isInteger.ts:1](https://github.com/Tbutnyakov/tiny-fp/blob/4b4c4db/src/isInteger.ts#L1)

___

### isNotEmpty

▸ `Const`**isNotEmpty**(`value`: *any*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`value` | *any* |

**Returns:** *boolean*

Defined in: [isNotEmpty.ts:3](https://github.com/Tbutnyakov/tiny-fp/blob/4b4c4db/src/isNotEmpty.ts#L3)

___

### isObject

▸ `Const`**isObject**<Candidate\>(`value`: Candidate): *boolean*

#### Type parameters:

Name |
:------ |
`Candidate` |

#### Parameters:

Name | Type |
:------ | :------ |
`value` | Candidate |

**Returns:** *boolean*

Defined in: isObject.ts:1

___

### isRecord

▸ `Const`**isRecord**(`value`: *any*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`value` | *any* |

**Returns:** *boolean*

Defined in: [isRecord.ts:1](https://github.com/Tbutnyakov/tiny-fp/blob/4b4c4db/src/isRecord.ts#L1)

___

### isString

▸ `Const`**isString**(`someElement`: *any*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`someElement` | *any* |

**Returns:** *boolean*

Defined in: [isString.ts:1](https://github.com/Tbutnyakov/tiny-fp/blob/4b4c4db/src/isString.ts#L1)

___

### last

▸ `Const`**last**<T\>(`x`: T[]): T

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`x` | T[] |

**Returns:** T

Defined in: [last.ts:8](https://github.com/Tbutnyakov/tiny-fp/blob/4b4c4db/src/last.ts#L8)

▸ `Const`**last**(`x`: String): String

#### Parameters:

Name | Type |
:------ | :------ |
`x` | String |

**Returns:** String

Defined in: [last.ts:8](https://github.com/Tbutnyakov/tiny-fp/blob/4b4c4db/src/last.ts#L8)

___

### maybe

▸ `Const`**maybe**<F\>(`someValue`: F): *Maybe*<F\>

#### Type parameters:

Name |
:------ |
`F` |

#### Parameters:

Name | Type |
:------ | :------ |
`someValue` | F |

**Returns:** *Maybe*<F\>

Defined in: [maybe.ts:43](https://github.com/Tbutnyakov/tiny-fp/blob/4b4c4db/src/maybe.ts#L43)

___

### modulo

▸ `Const`**modulo**(...`props`: *any*): *any*

#### Parameters:

Name | Type |
:------ | :------ |
`...props` | *any* |

**Returns:** *any*

Defined in: [modulo.ts:3](https://github.com/Tbutnyakov/tiny-fp/blob/4b4c4db/src/modulo.ts#L3)

___

### multiply

▸ `Const`**multiply**(...`props`: *any*): *any*

#### Parameters:

Name | Type |
:------ | :------ |
`...props` | *any* |

**Returns:** *any*

Defined in: [multiply.ts:3](https://github.com/Tbutnyakov/tiny-fp/blob/4b4c4db/src/multiply.ts#L3)

___

### noop

▸ `Const`**noop**(): *undefined*

**Returns:** *undefined*

Defined in: [noop.ts:1](https://github.com/Tbutnyakov/tiny-fp/blob/4b4c4db/src/noop.ts#L1)

___

### not

▸ `Const`**not**<T\>(`entity`: T): *boolean*

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`entity` | T |

**Returns:** *boolean*

Defined in: [not.ts:1](https://github.com/Tbutnyakov/tiny-fp/blob/4b4c4db/src/not.ts#L1)

___

### or

▸ `Const`**or**(...`props`: *any*): *any*

#### Parameters:

Name | Type |
:------ | :------ |
`...props` | *any* |

**Returns:** *any*

Defined in: [or.ts:3](https://github.com/Tbutnyakov/tiny-fp/blob/4b4c4db/src/or.ts#L3)

___

### pick

▸ `Const`**pick**<T, K\>(`targetObj`: T, `requiredFieldsArr`: K[]): *Pick*<T, K\>

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | - |
`K` | *string* \| *number* \| *symbol* |

#### Parameters:

Name | Type |
:------ | :------ |
`targetObj` | T |
`requiredFieldsArr` | K[] |

**Returns:** *Pick*<T, K\>

Defined in: [pick.ts:1](https://github.com/Tbutnyakov/tiny-fp/blob/4b4c4db/src/pick.ts#L1)

___

### pipe

▸ `Const`**pipe**<T, R\>(`fn1`: (...`args`: T) => R, ...`fns`: (`a`: R) => R[]): *function*

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | *any*[] |
`R` | - |

#### Parameters:

Name | Type |
:------ | :------ |
`fn1` | (...`args`: T) => R |
`...fns` | (`a`: R) => R[] |

**Returns:** (...`args`: T) => R

Defined in: [pipe.ts:1](https://github.com/Tbutnyakov/tiny-fp/blob/4b4c4db/src/pipe.ts#L1)

___

### prepend

▸ `Const`**prepend**(...`props`: *any*): *any*

#### Parameters:

Name | Type |
:------ | :------ |
`...props` | *any* |

**Returns:** *any*

Defined in: [prepend.ts:4](https://github.com/Tbutnyakov/tiny-fp/blob/4b4c4db/src/prepend.ts#L4)

___

### prop

▸ `Const`**prop**(...`props`: *any*): *any*

#### Parameters:

Name | Type |
:------ | :------ |
`...props` | *any* |

**Returns:** *any*

Defined in: [prop.ts:3](https://github.com/Tbutnyakov/tiny-fp/blob/4b4c4db/src/prop.ts#L3)

___

### random

▸ `Const`**random**<T\>(`a`: T[]): T

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`a` | T[] |

**Returns:** T

Defined in: [random.ts:13](https://github.com/Tbutnyakov/tiny-fp/blob/4b4c4db/src/random.ts#L13)

▸ `Const`**random**(`a`: *number*, `b`: *number*): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`a` | *number* |
`b` | *number* |

**Returns:** *number*

Defined in: [random.ts:13](https://github.com/Tbutnyakov/tiny-fp/blob/4b4c4db/src/random.ts#L13)

___

### reorderArray

▸ `Const`**reorderArray**<T\>(`__namedParameters`: { `items`: T[] ; `newIndex`: *number* ; `oldIndex`: *number*  }): (*undefined* \| T)[]

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`__namedParameters` | *object* |
`__namedParameters.items` | T[] |
`__namedParameters.newIndex` | *number* |
`__namedParameters.oldIndex` | *number* |

**Returns:** (*undefined* \| T)[]

Defined in: [reorderArray.ts:1](https://github.com/Tbutnyakov/tiny-fp/blob/4b4c4db/src/reorderArray.ts#L1)

___

### skip

▸ `Const`**skip**<P\>(`times?`: *number*, `targetFn`: Function): *function*

#### Type parameters:

Name |
:------ |
`P` |

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`times` | *number* | 1 |
`targetFn` | Function | - |

**Returns:** (...`props`: P[]) => *void*

Defined in: [skip.ts:1](https://github.com/Tbutnyakov/tiny-fp/blob/4b4c4db/src/skip.ts#L1)

___

### sleep

▸ `Const`**sleep**(`ms`: *number*): *Promise*<unknown\>

#### Parameters:

Name | Type |
:------ | :------ |
`ms` | *number* |

**Returns:** *Promise*<unknown\>

Defined in: [sleep.ts:1](https://github.com/Tbutnyakov/tiny-fp/blob/4b4c4db/src/sleep.ts#L1)

___

### sum

▸ `Const`**sum**(...`props`: *any*): *any*

#### Parameters:

Name | Type |
:------ | :------ |
`...props` | *any* |

**Returns:** *any*

Defined in: [sum.ts:3](https://github.com/Tbutnyakov/tiny-fp/blob/4b4c4db/src/sum.ts#L3)

___

### trace

▸ `Const`**trace**<P\>(`property`: P): P

#### Type parameters:

Name |
:------ |
`P` |

#### Parameters:

Name | Type |
:------ | :------ |
`property` | P |

**Returns:** P

Defined in: [trace.ts:1](https://github.com/Tbutnyakov/tiny-fp/blob/4b4c4db/src/trace.ts#L1)

___

### unique

▸ `Const`**unique**(`items`: *any*[], `cb?`: Function): *any*[]

#### Parameters:

Name | Type |
:------ | :------ |
`items` | *any*[] |
`cb` | Function |

**Returns:** *any*[]

Defined in: [unique.ts:1](https://github.com/Tbutnyakov/tiny-fp/blob/4b4c4db/src/unique.ts#L1)

___

### updateArray

▸ `Const`**updateArray**<T\>(`targetArr`: T[], `index`: *number*, `newValue`: T): T[]

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`targetArr` | T[] |
`index` | *number* |
`newValue` | T |

**Returns:** T[]

Defined in: [updateArray.ts:1](https://github.com/Tbutnyakov/tiny-fp/blob/4b4c4db/src/updateArray.ts#L1)
