<template>
    <q-page>
        <div  class="tw-w-fit lg:tw-w-[75vw] tw-mx-auto md:tw-p-6">
        <div class="tw-mt-4">
            <h1 class="tw-text-2xl">How can we help you?</h1>
        </div>
        <div class="q-gutter-md tw-m-10">
             <q-input
                v-model="search"
                debounce="1000"
                filled
                placeholder="Search for helpful articles"
            >
                <template v-slot:prepend>
                <q-icon name="search" />
                </template>
            </q-input>
        </div>
        <div class="tw-flex tw-flex-col tw-justify-between tw-items-center md:tw-flex md:tw-flex-row tw-gap-2 tw-mt-5">
            <q-card flat class="my-card tw-w-[150px] bg-grey-3 tw-p-2">
            <q-card-section class="tw-flex tw-flex-col tw-items-center tw-gap-2">
                <img src="~assets/icons/pay.svg" class="tw-w-[30px]"/>
                <div class="text-subtitle2">Payment </div>
            </q-card-section>
            </q-card>
            <q-card flat class="my-card tw-w-[150px] bg-grey-3 tw-p-1">
            <q-card-section class="tw-flex tw-flex-col tw-items-center tw-gap-2">
                <img src="~assets/icons/change_circle.svg" class="tw-w-[30px]"/>
                <div class="text-subtitle2">Change Course</div>
            </q-card-section>
            </q-card>
            <q-card flat class="my-card tw-w-[150px] bg-grey-3 tw-p-1">
            <q-card-section class="tw-flex tw-flex-col tw-items-center tw-gap-2">
                 <img src="~assets/icons/account_settings.svg" class="tw-w-[30px]"/>
                <div class="text-subtitle2">Account Settings</div>
            </q-card-section>
            </q-card>
            <q-card flat class="my-card tw-w-[150px] bg-grey-3 tw-p-1">
            <q-card-section class="tw-flex tw-flex-col tw-items-center tw-gap-2">
                 <img src="~assets/icons/reset.svg" class="tw-w-[30px]"/>
                <div class="text-subtitle2">Password reset</div>
            </q-card-section>
            </q-card>
        </div>
        <div class="tw-mt-8">
            <div class="tw-text-center">
                <h1 class="tw-text-bold tw-text-2xl">Frequently Asked Questions</h1>
            </div>
            <q-list class="tw-border-y-2 tw-p-2 tw-mt-4">
                <q-expansion-item
                    group="somegroup"
                    dense-toggle
                    dense
                    label="How can I verify my payment?"
                    default-opened
                >
                <q-separator />
                    <div>
                    <q-card-section>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                        commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                        eveniet doloribus ullam aliquid.
                    </q-card-section>
                    </div>
                </q-expansion-item>
            </q-list>
            <q-list class="tw-p-2">
                <q-expansion-item
                    group="somegroup"
                    dense-toggle
                    dense
                    label="How do I reset my password?"
                >
                <q-separator />
                    <div>
                    <q-card-section>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                        commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                        eveniet doloribus ullam aliquid.
                    </q-card-section>
                    </div>
                </q-expansion-item>
            </q-list>
            <q-list class="tw-border-y-2 tw-p-2">
                <q-expansion-item
                    group="somegroup"
                    dense-toggle
                    dense
                    label="Can I change course after enrolment?"
                >
                <q-separator />
                    <div>
                    <q-card-section>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                        commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                        eveniet doloribus ullam aliquid.
                    </q-card-section>
                    </div>
                </q-expansion-item>
            </q-list>
        </div>
        </div>
    </q-page>
</template>