extern crate cfg_if;
extern crate wasm_bindgen;
extern crate js_sys;
extern crate web_sys;

use cfg_if::cfg_if;
use wasm_bindgen::prelude::*;

cfg_if! {
    // When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
    // allocator.
    if #[cfg(feature = "wee_alloc")] {
        extern crate wee_alloc;
        #[global_allocator]
        static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;
    }
}

// #[macro_use]
// macro_rules! log {
//     ( $( $t:tt )* ) => {
//         web_sys::console::log_1(&format!( $( $t )* ).into());
//     }
// }

#[wasm_bindgen]
pub struct Fire {
    height: usize,
    width: usize,
    cells: Vec<u8>
}

#[wasm_bindgen]
impl Fire {

    pub fn new(height: usize, width: usize, rows: usize) -> Fire {

        let mut cells = Vec::new();
        let mut ctr = 0;

        for row in 0..height {
            if row > height - rows  {
                ctr += 1;
            }
            for _col in 0..width {
                cells.push(ctr);
            }
        }

        Fire {
            height, 
            width,
            cells
        }

    }

    pub fn get_width(&self) -> usize {
        self.width
    }

    pub fn get_height(&self) -> usize {
        self.height 
    }

    pub fn get_cells(&self) -> *const u8 {
        self.cells.as_ptr()
    }
    
    fn get_index(&self, row: usize, column: usize) -> usize {
        (row * self.width + column) as usize
    }

    pub fn update_cells(&mut self) {

        let mut cells = self.cells.clone();

        for row in 0..self.height {
            for col in 0..self.width {
                let current_index = self.get_index(row as usize, col as usize);
                let below_index = self.get_index((row + 1) as usize, col as usize);

                if below_index > self.cells.len() - 1 {
                    continue;
                }

                let below_intensity = self.cells[below_index];
                let decay = js_sys::Math::floor(js_sys::Math::random() * 3.0) as u8;

                if below_index >= (self.width * self.height) as usize {
                    continue;
                }

                //  catch overflow
                if below_intensity > decay {
                    cells[current_index] = below_intensity - decay;
                } else {
                    cells[current_index] = 0;
                }
            }
        }

        self.cells = cells;
    }

}

