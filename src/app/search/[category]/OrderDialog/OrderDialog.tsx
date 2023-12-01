import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, MapInput, Modal } from '@/components';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import clsx from 'clsx';
import * as Models from '@/models';

const OrderSchema = z.object({
    product: z.object({
        id: z.string(),
        title: z.string(),
        price: z.number(),
        image: z.object({
            src: z.string(),
            alt: z.string()
        })
    }),
    address: z.object({
        lat: z.number(),
        lng: z.number()
    }).required()
});

type OrderSchemaType = z.infer<typeof OrderSchema>;

type CustomProps = {
    open: boolean;
    defaultValues: Partial<Models.NewOrder>;
    onClose: () => void;
    onSubmit: (post: Models.NewOrder) => void;
};

type PropsType = CustomProps & Omit<React.ComponentPropsWithoutRef<'div'>, keyof CustomProps>;

export const OrderDialog = (props: PropsType) => {

    const {
        className,
        open,
        defaultValues,
        onClose,
        onSubmit
    } = props;

    const {
        control,
        handleSubmit,
        setValue,
        trigger,
        formState: { errors }
    } = useForm<OrderSchemaType>({
        defaultValues,
        resolver: zodResolver(OrderSchema)
    });


    const onFormSubmit = handleSubmit(data => {
        onSubmit(data);
    });

    const classes = {
        root: clsx("HomeOrderDialog", className),
        title: "HomeOrderDialog-title",
        buttonWrapper: "HomeOrderDialog-buttonWrapper"
    };

    return (
        <Modal center open={open} onClose={onClose}>
            <h3 className={classes.title}>مشخص کردن محل تحویل</h3>
            <form onSubmit={onFormSubmit}>
                <Controller
                    name="address"
                    control={control}
                    render={({ field }) => (
                        <MapInput
                            value={field.value}
                            onChange={({ lat, lng }) => {
                                setValue('address.lat', lat);
                                setValue('address.lng', lng);
                                trigger("address");
                            }} />
                    )} />

                <div className={classes.buttonWrapper}>
                    <p>{errors.address ? "لطفا انتخاب کنید" : ""}</p>
                    <Button type='submit'>ارسال</Button>
                </div>
            </form>
        </Modal>
    )
}