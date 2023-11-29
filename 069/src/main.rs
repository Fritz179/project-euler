fn is_prime(n: i32) -> bool {
    if n == 2 {
        return true;
    }
    if n % 2 == 0 {
        return false;
    }
    let mut i = 3;
    while i * i <= n {
        if n % i == 0 {
            return false;
        }
        i = i + 2;
    }
    true
}

const MAX: i32 = 1_000_000;

fn main() {
    let mut num = 2;

    for i in 3..MAX {
        if is_prime(i) {
            num = num * i;
            if num > MAX {
                num = num / i;
                break;
            }
        }
    }


    println!("num: {num}");
}
