async function test() {
  console.log('1');

  await wait(2000);

  console.log('2');
}

async function wait(duration) {
  return await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 2000)
  );
}

test();


