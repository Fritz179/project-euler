/*

if we consider the fraction a/b:

Increasing a will increase the value of the fraction
Decreasing b will increase the value of the fraction

if we start with a = 1 and b = 3, we can increse both numbers until we reach the maximum value

we increse a until we go over the target value, we take one step back and increase b
This way we always stay below the target value
we keep track of the closest fraction to the target value

*/

const TARGET: f64 = 3.0 / 7.0;
const MAX: i32 = 1_000_000;

fn main() {
    let mut a = 1.0;
    let mut b = 3.0;

    let mut record = 0.0;
    let mut holder = 0;

    loop {
        a += 1.0;

        if a / b >= TARGET {
            a -= 1.0;
            b += 1.0;
        }

        if a / b > record {
            record = a / b;
            holder = a as i32;
        }

        if b > MAX as f64 || a > MAX as f64{
            break;
        }
    }

    println!("num: {}", holder);
}
