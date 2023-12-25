// @ts-nocheck

type T = 'A'|'B';
type U = `${T}_id`; // "A_id"|"B_id"

type T = 'A'|'B';
type U = '1'|'2';
type V = `${T}${U}`; // 'A1'|'A2'|'B1'|'B2'

