'use client';

import ImagePicker from 'modecraft/components/showcase/image-picker';
import classes from './page.module.css';
import { shareProduct } from 'modecraft/lib/actions';
import ProductsFormSubmit from 'modecraft/components/showcase/products-form-submit';
import { useFormState } from 'react-dom';

export default function ShareProductPage() {
    const [ state, formAction ] = useFormState(shareProduct, { message: null });

    return (
        <>
            <header className={classes.header}>
                <h1>
                    あなたの<span className={classes.highlight}>お気に入りの作品</span>をシェアしましょう
                </h1>
                <p>素晴らしい作品との出会いを、みんなで共有しましょう！</p>
            </header>
            <main className={classes.main}>
                <form className={classes.form} action={formAction}>
                    <div className={classes.row}>
                        <p>
                            <label htmlFor='name'>名前</label>
                            <input type='text' id='name' name='name' required />
                        </p>
                        <p>
                            <label htmlFor='email'>メールアドレス</label>
                            <input type='email' id='email' name='email' required />
                        </p>
                    </div>
                    <p>
                        <label htmlFor='title'>タイトル</label>
                        <input type='text' id='title' name='title' required />
                    </p>
                    <p>
                        <label htmlFor='summary'>作品概要</label>
                        <input type='text' id='summary' name='summary' required />
                    </p>
                    <p>
                        <label htmlFor='instructions'>詳細</label>
                        <textarea
                            id='instructions'
                            name='instructions'
                            rows='10'
                            required
                        ></textarea>
                    </p>
                    <ImagePicker label='画像' name='image' />
                    {state.message && <p>{state.message}</p>}
                    <p className={classes.actions}>
                        <ProductsFormSubmit />
                    </p>
                </form>
            </main>
        </>
    );
}
