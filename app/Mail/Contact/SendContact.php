<?php

namespace App\Mail\Contact;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

/**
 * Class SendContact.
 */
class SendContact extends Mailable implements ShouldQueue
{
    use Dispatchable, Queueable, InteractsWithQueue, SerializesModels;

    /**
     * @var array
     */
    public $request;

    /**
     * SendContact constructor.
     *
     * @param array $request
     */
    public function __construct(array $request)
    {
        $this->request = $request;
    }

    /**
     * Build the message.
     *
     * @return \App\Mail\Contact\SendContact
     */
    public function build()
    {
        return $this
            ->to(config('mail.from.address'), config('mail.from.name'))
            ->subject(__('strings.emails.contact.subject', ['app_name' => config('app.name')]))
            ->from($this->request['email'], $this->request['name'])
            ->replyTo($this->request['email'], $this->request['name'])
            ->markdown('emails.contact');
    }
}
