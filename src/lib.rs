extern crate cfg_if;
extern crate wasm_bindgen;

mod utils;

use cfg_if::cfg_if;
use wasm_bindgen::prelude::*;
use rand::{thread_rng, Rng};
use rand::distributions::Alphanumeric;

cfg_if! {
    // When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
    // allocator.
    if #[cfg(feature = "wee_alloc")] {
        extern crate wee_alloc;
        #[global_allocator]
        static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;
    }
}

#[wasm_bindgen]
pub fn gen_rand(size:usize) -> String {
    let rand_string: String = thread_rng()
    .sample_iter(&Alphanumeric)
    .take(size)
    .collect();
    return rand_string;
}