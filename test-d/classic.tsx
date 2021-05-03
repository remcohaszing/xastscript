/* @jsx x */
/* @jsxFrag null */
import {expectType, expectError} from 'tsd'
import {Root, Element} from 'xast'
import {x} from '../index.js'

type Result = Element | Root

// To do: fix classic types.
/* eslint-disable @typescript-eslint/no-unsafe-argument */
expectType<Result>(<></>)
expectType<Result>(<a />)
expectType<Result>(<a b="c" />)
expectType<Result>(<a b={'c'} />)
expectType<Result>(<a>string</a>)
expectType<Result>(<a>{['string', 'string']}</a>)
expectType<Result>(
  <a>
    <></>
  </a>
)
expectType<Result>(<a>{x()}</a>)
expectType<Result>(<a>{x('b')}</a>)
expectType<Result>(
  <a>
    <b />c
  </a>
)
expectType<Result>(
  <a>
    <b />
    <c />
  </a>
)
expectType<Result>(<a>{[<b />, <c />]}</a>)
expectType<Result>(<a>{[<b />, <c />]}</a>)
expectType<Result>(<a>{[]}</a>)

expectError(<a invalid={{}} />)
expectError(<a invalid={[1]} />)
expectError(<a>{{invalid: 'child'}}</a>)

declare function Bar(props?: Record<string, unknown>): Element
expectError(<Bar />)

/* eslint-enable @typescript-eslint/no-unsafe-argument */
